import { CardProps } from "@/types/card";

// Passing children: The children (React.ReactNode) prop is implicitly passed 
// when you include JSX elements within a component's tags. 
// In this case, the div elements are passed as children to the Card component.

function Card({children, reverse }: CardProps) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
        color: reverse ? '#fff' : '#000',
      }}
    >
      {children}
    </div>
  );
}

export default Card;
