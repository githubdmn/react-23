
import { HeaderProps } from "@/types";

const defaultProps: HeaderProps = {
	title: 'Default Title',
	color: 'pink',
	backgroundColor: 'rgba(0,0,0,0.4)',
};

export default function Header(props: Partial<HeaderProps>) {

	const { title, color, backgroundColor } = { ...defaultProps, ...props };
	/* If a property exists in both defaultProps and props, the value from props will overwrite the value from defaultProps due to the order in which they are spread. */

  const headerStyles = {
    backgroundColor: backgroundColor,
    color: color,
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h1>Header {title}</h1>
      </div>
    </header>
  );
}
