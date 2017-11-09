const srcContext = require.context('../client', true, /\.(js|jsx)$/);
srcContext.keys().forEach(srcContext);

const supportContext = require.context('../support/mocks', true, /\.(js|jsx)$/);
supportContext.keys().forEach(supportContext);
