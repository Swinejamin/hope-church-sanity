export default {
  name: 'sermon',
  type: 'document',
  title: 'Sermon',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Summarize this sermon.'
    },
    {
      name: 'speakers',
      title: 'Speaker(s)',
      type: 'array',
      unique: true,
      validation: Rule =>
        Rule.required()
          .min(1),

      of: [
        {
          type: 'person',

        }
      ],

    }
  ]
};
