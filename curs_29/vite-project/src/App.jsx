import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onEmailCandch = (event) => {
    if(event.target.value === 1) {

    } else {
      setEmail(event.target.value)
    }
  }
  const onPasswordCandch = (event) => setPassword(event.target.value)
  const handleEmailChange = (event) => {
    event.preventDefault()
  }
  return (
    <form onSubmit={handleEmailChange}>
    <label>
    <span>Name</span>
    <input type="text"  onChange={onEmailCandch}/>
    </label>
    <label>
<span>password</span>
    <input type="password" onChange={onPasswordCandch} />
    </label>
    <button type='submit'>Send</button>
    </form>
  )
}

export default App
