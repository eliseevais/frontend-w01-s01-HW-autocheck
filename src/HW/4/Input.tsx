type InputPropsType = {
	currentText: string;
	setCurrentText: Function;
};

export const Input = (props: InputPropsType) => {
	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log("hello from onChangeHandler", event.target.value);
	};

	return (
		<input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler} />
	);
};
