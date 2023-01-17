import config from '../../../config.json';
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)

const sumfetchSmall = `
   sumfetch: summary display
  -----------
   ABOUT
   ${config.name}
  ﰩ ${config.ps1_hostname}
   <u><a href="${config.resume_url}" target="_blank">resume</a></u>
  爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
  -----------
   CONTACT 
   <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
   <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
`;

export const sumfetch = async (args: string[]): Promise<string> => {
  let isDesktop
  if (typeof window !== 'undefined') {
    isDesktop = parseInt(fullConfig.theme.screens.md, 10) < window.innerWidth
  }
  if (config.ascii === 'dohoang') {
    if (!isDesktop) {
      return sumfetchSmall;
    }
    return `                                                  
    ================================================.    sumfetch: summary display
     .-.   .-.     .--.                             |   -----------
    | OO| | OO|   / _.-' .-.   .-.  .-.   .''.      |    ABOUT
    |   | |   |   \\  '-. '-'   '-'  '-'   '..'      |    ${config.name}
    '^^^' '^^^'    '--'                             |   ﰩ ${config.ps1_hostname}
    ===============.  .-.  .================.  .-.  |    <u><a href="${config.resume_url}" target="_blank">resume</a></u>
                   | |   | |                |  '-'  |   爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
                   | |   | |                |       |   -----------
                   | ':-:' |                |  .-.  |    CONTACT 
                   |  '-'  |                |  '-'  |    <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
    ==============='       '================'       |    <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
                                                    |    <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
    ================================================.   ----------- 
      
      

`;
  } else {
    if (!isDesktop) {
      return sumfetchSmall;
    }
    return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                  sumfetch
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             ABOUT
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            ${config.name}
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓           <u><a href="${config.resume_url}" target="_blank">resume</a></u>
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
▐▓                                 ▐▓       -----------
▐▓        > L I V E T E R M        ▐▓        CONTACT 
▐▓                                 ▐▓        <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           -----------
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀            
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀               
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                  

`;
  }
};