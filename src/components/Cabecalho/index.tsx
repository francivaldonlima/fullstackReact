type CabecalhoProps = {
    title: string;
  };
  
  // const Header = ({ title }: HeaderProps) => <h1>{title}</h1>;
  // export default Header;
  
  function Cabecalho({ title }: CabecalhoProps) {
    return (
      <div className="row">
          <h1>{title}</h1>
      </div>
    );
  }
  
  export default Cabecalho;