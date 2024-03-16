interface GreetProps {
  name: string;
  messageCount?: number; // optional prop (can or can't be passed from parent component)
  isLogin: boolean;
}

const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props; // default value for messageCount (if no value passed from parent messageCount carries the value 0)
  return (
    <div className="Greet">
      {props.isLogin ? (
        <h4>
          Hello {props.name}! You have {messageCount} unread messages...
        </h4>
      ) : (
        <h4>Please login to see unread messages</h4>
      )}
    </div>
  );
};

export default Greet;
