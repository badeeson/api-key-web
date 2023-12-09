import KeyDetailsPage from '@/components/KeyDetailsPage';
import * as React from 'react';

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <React.Fragment>
      <KeyDetailsPage keyValue={params.slug} />
    </React.Fragment>
  );
}
