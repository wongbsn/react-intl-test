import { useRouter } from 'next/router';
import queryString from 'query-string';
import {FormattedMessage, defineMessage, defineMessages, useIntl} from 'react-intl'
import styles from '../styles/Home.module.css'

export default function Home() {
  const intl = useIntl();
  const router = useRouter();
  const listMessages = [
    {
      message: defineMessage({
        defaultMessage: 'Visit google <link>here</link>',
      }),
      link: 'https://www.google.com'
    },
    {
      message: defineMessage({
        defaultMessage: 'Visit firefox <link>here</link>',
      }),
      link: 'https://www.mozilla.org/'
    },
  ];

  return (
    <div className={styles.container}>
      <p>
        <FormattedMessage
          defaultMessage="Today is {ts, date, ::yyyyMMdd}"
          values={{ts: Date.now()}}
        />
      </p>
      <ul>
      {listMessages.map(({ message, link }, index) =>
        <li key={index}>
          {intl.formatMessage(message, {
            link: text => (
              <a
                href={queryString.stringifyUrl({ url: link, query: router.query })}
                target="_blank"
              >
                {text}
              </a>
            )
          })}
        </li>
      )}
      </ul>
    </div>
  )
}
