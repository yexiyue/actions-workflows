//! `SeaORM` Entity. Generated by sea-orm-codegen 0.12.15

use sea_orm::entity::prelude::*;
use serde::{Deserialize, Serialize};

#[derive(
    Clone,
    Debug,
    PartialEq,
    DeriveEntityModel,
    Eq,
    Serialize,
    Deserialize,
    async_graphql :: SimpleObject,
)]
#[sea_orm(table_name = "user")]
#[graphql(concrete(name = "User", params()))]
pub struct Model {
    #[sea_orm(primary_key, auto_increment = false)]
    pub id: i32,
    pub username: String,
    pub avatar_url: String,
    pub create_at: Option<DateTimeWithTimeZone>,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {
    #[sea_orm(has_many = "super::comment::Entity")]
    Comment,
    #[sea_orm(has_many = "super::favorites::Entity")]
    Favorites,
    #[sea_orm(has_many = "super::template::Entity")]
    Template,
}

impl Related<super::comment::Entity> for Entity {
    fn to() -> RelationDef {
        Relation::Comment.def()
    }
}

impl Related<super::favorites::Entity> for Entity {
    fn to() -> RelationDef {
        Relation::Favorites.def()
    }
}

impl Related<super::template::Entity> for Entity {
    fn to() -> RelationDef {
        super::favorites::Relation::Template.def()
    }
    fn via() -> Option<RelationDef> {
        Some(super::favorites::Relation::User.def().rev())
    }
}

impl ActiveModelBehavior for ActiveModel {}
