import React from 'react';


export const NotFoundLayout = ({content}) => (
    <div>
      <header>
        This url was not found.
      </header>
      <main>
        {content}
      </main>
    </div>
);
