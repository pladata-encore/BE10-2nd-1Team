
    export type RemoteKeys = 'lawformInquiryApp/App';
    type PackageType<T> = T extends 'lawformInquiryApp/App' ? typeof import('lawformInquiryApp/App') :any;