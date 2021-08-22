import Section from '../../components/ui/Section/Section';
import Wrapper from '../../components/ui/Wrapper/Wrapper';
import Grid from '../../components/ui/Grid/Grid';
import ContactForm from '../../components/ContactForm/ContactForm';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import InstagramIcon from '@material-ui/icons/Instagram';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <Section>
      <Wrapper>
        <Grid>
          <div className={styles.links}>
            <div>
              <a
                href="mailto:thomas.a.brettell@gmail.com"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <EmailIcon style={{ color: 'var(--color-black)' }} />
                <span>thomas.a.brettell@gmail.com</span>
              </a>
              <a
                href="tel:0425429717"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <PhoneIphoneIcon style={{ color: 'var(--color-black)' }} />
                <span>+61 0425 429 717</span>
              </a>
              <a
                href="https://www.linkedin.com/in/thomas-brettell-153a991b5/"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <LinkedInIcon style={{ color: 'var(--color-black)' }} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/teabrettell/"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                <InstagramIcon style={{ color: 'var(--color-black)' }} />
                <span>@teabrettell</span>
              </a>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </Grid>
      </Wrapper>
    </Section>
  );
};

export default Contact;
