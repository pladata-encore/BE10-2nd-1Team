export const mfConfig = {
    name: "lawform_container",
    remotes: {
        lawformHeaderApp: "lawformHeaderApp@http://localhost:3001/remoteEntry.js",
        lawformFooterApp: "lawformFooterApp@http://localhost:3002/remoteEntry.js",
        lawformMainApp: "lawformMainApp@http://localhost:3003/remoteEntry.js",
        lawformTopic1App: "lawformTopic1App@http://localhost:3006/remoteEntry.js",
        lawformInquiryApp: "lawformInquiryApp@http://localhost:3007/remoteEntry.js",
        lawformAboutUsApp: "lawformAboutUsApp@http://localhost:3008/remoteEntry.js",
        modalTestApp: "modalTestApp@http://localhost:3333/remoteEntry.js",
    },
    shared: {
        react: {singleton: true, requiredVersion: "^18.2.0"},
        "react-dom": {singleton: true, requiredVersion: "^18.2.0"},
        "@mui/material": {singleton: true, requiredVersion: "^7.0.1"},
        "@mui/icons-material": {singleton: true, requiredVersion: "^7.0.1"},
        "react-router-dom": {singleton: true, requiredVersion: "^6.30.0"},
    },
};
