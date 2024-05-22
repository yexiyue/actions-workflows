import { gql } from "@/__generated__/gql";
import tagMapColor from "@/assets/tagMapColor.json";
import { LayoutOutletContext } from "@/components/Layout";
import { TemplateCard } from "@/components/TemplateCard";
import useUrlState from "@ahooksjs/use-url-state";
import { LoadingOutlined } from "@ant-design/icons";
import { useQuery } from "@apollo/client";
import { t } from "@lingui/macro";
import { App, Input, List, Menu, MenuProps, Tag } from "antd";
import { useEffect, useState } from "react";
import PrefectScrollbar from "react-perfect-scrollbar";
import { useNavigate, useOutletContext } from "react-router";

const { Search } = Input;

type MenuItem = Required<MenuProps>["items"][number];

const query = gql(`
  query Dates($categoryId: Int, $pagination:Pagination,$search:String) {
    categories{
      id
      name
    }
    tags{
      id
      name
    }
    templatesWithPagination(categoryId: $categoryId, pagination: $pagination,search: $search) {
      templates{
        id
      }
      total
    }
  }
`);

export const Component = () => {
  const { message } = App.useApp();
  const { scrollToTop } = useOutletContext<LayoutOutletContext>();
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>();
  const [state, setState] = useUrlState<{
    category?: string;
    page: number;
  }>({
    page: 1,
  });
  const pageSize = 10;

  const { data, loading, error } = useQuery(query, {
    variables: {
      categoryId: state.category ? parseInt(state.category) : undefined,
      pagination: {
        page: state?.page > 1 ? state.page - 1 : 0,
        pageSize,
      },
      search: search,
    },
  });

  useEffect(() => {
    if (error) {
      message.error(error.message);
    }
  }, [error]);
  const items: MenuItem[] =
    data?.categories?.map((item) => {
      return {
        key: item.id,
        label: item.name,
      };
    }) ?? [];

  items.unshift({
    key: "all",
    label: t`全部`,
  });

  return (
    <div className="w-[80%] flex gap-6 m-auto mt-4 relative pb-6 items-start">
      <div className="w-[180px] h-[500px] border sticky top-0">
        <PrefectScrollbar>
          <Menu
            items={items}
            defaultSelectedKeys={["all"]}
            onSelect={(e) => {
              if (e.key === "all") {
                setState({
                  category: undefined,
                });
              } else {
                setState({
                  category: Number(e.key),
                });
              }
              scrollToTop();
            }}
          />
        </PrefectScrollbar>
      </div>

      <div className="flex-1 bg-white p-4 min-w-[400px]">
        <Search
          placeholder={t`搜索模板`}
          allowClear
          value={search}
          className="my-2"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          loading={loading}
          enterButton
        />
        <List
          loading={{
            spinning: loading,
            indicator: <LoadingOutlined style={{ fontSize: 24 }} />,
          }}
          itemLayout="vertical"
          size="large"
          pagination={{
            pageSize,
            total: data?.templatesWithPagination.total,
            onChange(page) {
              setState({ page });
            },
            current: state.page,
          }}
          dataSource={data?.templatesWithPagination.templates}
          renderItem={(item) => <TemplateCard key={item.id} id={item.id} />}
        ></List>
      </div>

      <div className="w-[280px] border sticky top-0 flex flex-wrap gap-3 p-4 rounded-lg bg-white">
        {data?.tags.map((item) => {
          return (
            <Tag
              className="cursor-pointer"
              color={(tagMapColor as any)[item.name]}
              onClick={() => {
                navigate(`/tag/${item.id}`);
              }}
              key={item.id}
            >
              {item.name}
            </Tag>
          );
        })}
      </div>
    </div>
  );
};
