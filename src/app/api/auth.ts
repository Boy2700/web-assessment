import md5 from 'md5';

const AGENT_CODE = 'TBC'; // Replace with your actual agent code
const STATIC_TOKEN = 'eyJyNzMyZTEzNGMyMTg5NTEiiOjE1ODAzODQyNTA3MDN9';

export function generateSecurityKey() {
  return md5(AGENT_CODE) + '|' + STATIC_TOKEN;
}

