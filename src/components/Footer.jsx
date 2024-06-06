import Icon from '@mdi/react';
import { mdiGithub } from '@mdi/js';

export default function Footer() {
  return (
    <footer className="footer font">
      <Icon path={mdiGithub} size={1.5} />
      <a href="https://github.com/Ben-Long50">Ben-Long50</a>
    </footer>
  );
}
