import React from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';

function Content({ content }) {
  const { enqueueSnackbar } = useSnackbar();

  return (
    <React.Fragment enqueueSnackbar={enqueueSnackbar}>
      {content}
    </React.Fragment>
  )
}

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Content />
    </SnackbarProvider>
  );
}