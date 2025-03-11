interface GreetingsProps {
  name?: string;
}
export const Greetings = ({ name }: GreetingsProps) => {
  return <div>Hello {name}</div>;
};
