import useInput from '../hooks/use-input';

const isNotEmpty = value => value.trim().length !== 0;
const isEmail = enteredEmail => enteredEmail.includes('@');

export default function BasicForm(props) {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);

  const {
    value: secondNameValue,
    isValid: secondNameIsValid,
    hasError: secondNameHasError,
    valueChangeHandler: secondNameChangeHandler,
    inputBlurHandler: secondNameBlurHandler,
    reset: resetSecondName,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(
    enteredEmail => isNotEmpty(enteredEmail) && isEmail(enteredEmail)
  );

  let formIsValid = false;

  if (firstNameIsValid && secondNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    resetFirstName();
    resetSecondName();
    resetEmail();
  };

  const firstNameInputClasses = firstNameHasError
    ? 'form-control invalid'
    : 'form-control';

  const secondNameInputClasses = secondNameHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className='error-text'>First name must not be empty</p>
          )}
        </div>
        <div className={secondNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            value={secondNameValue}
            onChange={secondNameChangeHandler}
            onBlur={secondNameBlurHandler}
          />
          {secondNameHasError && (
            <p className='error-text'>Second Name must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <p className='error-text'>
            Email must not be empty and must contain '@' symbol
          </p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
}
