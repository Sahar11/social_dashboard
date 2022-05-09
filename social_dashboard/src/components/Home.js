import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export default function Home() {
  return (
    <header>
      <div>
        <p>Sahar</p>
      </div>
      <div></div>
      <div>
    <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
    </div>
    </header>
  );
}