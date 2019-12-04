import S from '@sanity/desk-tool/structure-builder'

import MdPerson from 'react-icons/lib/md/person'
import MdSettings from 'react-icons/lib/md/settings'
import MdAccessibility from 'react-icons/lib/md/accessibility'
import RssFeed from 'react-icons/lib/md/rss-feed'


const hiddenDocTypes = listItem =>
  !['category', 'person', 'sermon', 'post', 'siteSettings'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('People')
        .icon(MdPerson)
        .schemaType('person')
        .child(S.documentTypeList('person').title('People')),
      S.listItem()
        .title('Sermons')
        .icon(MdAccessibility)
        .schemaType('sermon')
        .child(S.documentTypeList('sermon').title('Sermons')),

      S.listItem()
        .title('Blog posts')
        .icon(RssFeed)
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog posts')),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
