export default {
  name: 'staff',
  type: 'document',
  title: 'Staff Member',
  fields: [
    {
      name: 'identity',
      type: 'reference',
      to: [{type: 'person'}]
    },

  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'image'
    }
  }
}
