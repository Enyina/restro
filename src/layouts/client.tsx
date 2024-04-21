import React from 'react';

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  );
};

export default ClientLayout;
