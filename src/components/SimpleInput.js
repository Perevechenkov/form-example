import { useRef, useState } from 'react';

export default function SimpleInput(props) {
  const nameInputRef = useRef();

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = event => {
    event.preventDefault();

    if (enteredName.trim().length === 0) {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);
    setEnteredName('');
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={`form-control ${!enteredNameIsValid && 'invalid'}`}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          ref={nameInputRef}
          value={enteredName}
          onChange={nameInputChangeHandler}
        />
        {!enteredNameIsValid && (
          <p className='error-text'>Name must not be empty</p>
        )}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
}
