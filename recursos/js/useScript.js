import React,{Component} from "react";

class App extends Component {
  componentDidMount() {
    const script = document.createElement("script");
 
    script.src = "https://www.mercadopago.com.pe/integrations/v1/web-payment-checkout.js";
    script.setAttribute('data-preference-id', '192097218-f27e9393-76d8-4e37-af71-1887450c64f9')
   script.async = true;
    this.div.appendChild(script);
  }
  render() {
    return (
      <div className="App" ref={el => (this.div = el)}>
        <h1>Hello react</h1>
        {/* Script is inserted here */}
      </div>
    );
  }
}

export default App;