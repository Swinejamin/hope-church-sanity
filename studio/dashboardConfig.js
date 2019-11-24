export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dd9d1e285fa715aec49ae32',
                  title: 'Sanity Studio',
                  name: 'hope-church-sanity-studio',
                  apiId: '35bc1f2a-7654-41c4-8b4a-99f01fde41fb'
                },
                {
                  buildHookId: '5dd9d1e2d4b682b3c63f12d2',
                  title: 'Blog Website',
                  name: 'hope-church-sanity',
                  apiId: '008f9d12-ba69-4d7b-ac0c-4fe208265e66'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Swinejamin/hope-church-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://hope-church-sanity.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
