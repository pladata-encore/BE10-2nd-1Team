
    export type RemoteKeys = 'lawformAboutUsApp/App';
    type PackageType<T> = T extends 'lawformAboutUsApp/App' ? typeof import('lawformAboutUsApp/App') :any;