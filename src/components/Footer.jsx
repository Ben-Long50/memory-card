import Icon from '@mdi/react';
import { mdiGithub } from '@mdi/js';

export default function Footer() {
  return (
    <footer className="footer font">
      <Icon path={mdiGithub} size={'clamp(1.5rem, 3vw, 2.5rem'} />
      <a href="https://github.com/Ben-Long50">Ben-Long50</a>
    </footer>
  );
}
