import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "author", "status", "publishedDate"],
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "タイトル",
    },
    {
      name: "slug",
      type: "text",
      label: "スラッグ",
      unique: true,
      admin: {
        description: "URLに使用されます",
      },
    },
    {
      name: "excerpt",
      type: "textarea",
      label: "要約",
      admin: {
        description: "記事の簡単な説明文",
      },
    },
    {
      name: "content",
      type: "richText",
      label: "本文",
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures],
      }),
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      label: "著者",
      required: true,
    },
    {
      name: "status",
      type: "select",
      label: "ステータス",
      options: [
        {
          label: "下書き",
          value: "draft",
        },
        {
          label: "公開",
          value: "published",
        },
        {
          label: "非公開",
          value: "archived",
        },
      ],
      defaultValue: "draft",
      required: true,
    },
    {
      name: "publishedDate",
      type: "date",
      label: "公開日",
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
        },
      },
    },
    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
      label: "アイキャッチ画像",
    },
  ],
};
