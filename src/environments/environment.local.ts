// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    userKey: 'current_user',
    currentUserProfileKey: 'current_user_profile',
    currentStudentKey: 'current_student',
    activeSessionKey: 'active_session',
    encryptionKey: '123qweasdzxc',
    baseApiUrl: 'http://localhost:8085/',
    baseFilesApiUrl: 'http://localhost:8085/files/',
    navigationApi: '/assets/data/navigation/links.json',
    todoApi: '/assets/data/todo/list.json',
    mailApi: '/assets/data/mail/list.json',
    chatsApi: '/assets/data/chats/list.json',
    analysisApi: '/assets/data/analysis',
    crmApi: '/assets/data/crm',
    tableApi: '/assets/data/table'
};
