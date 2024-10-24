import { read } from 'read'
import zxcvbn from 'zxcvbn'

while(true) {
  let pwd = await read({prompt: "Password: ", silent: true})
  if(pwd == "") break;
  console.log(zxcvbn(pwd))
}
