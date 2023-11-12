type ButtonPropsType = {
  callBack: any; // НУЖНО ПРОТИПИЗИРОВАТЬ
  name: string;
};

export const Button = (props: ButtonPropsType) => {
  const callBackHandler = () => {
    console.log("hello from button");
  };

  return (
    <button id={'hw04-button'} onClick={callBackHandler}>
      {props.name}
    </button>
  );
};
