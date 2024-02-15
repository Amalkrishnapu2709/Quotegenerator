
import { Button, Card } from 'react-bootstrap'
import './App.css'
import { useEffect, useState } from 'react';
function App() {
  
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    let url =' https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      });
  };








   
  const handleClick = () =>{
    getQuote();
  }
  return (
    <>
      <div className='mt-5 ' style={{height:'50vh',width:'100%'}}>
        <h1 style={{textAlign:'center'}}>Qoute generator app</h1>
       <div className='container mt-5 d-flex align-items-center justify-content-center'>
          <Card className='w-100' style={{height:'400px'}}>
        <Card.Body>
          
          <Card.Text style={{textAlign:'center',fontSize:'40px'}}>
           " {quote}"
          </Card.Text>
          <Card.Text style={{textAlign:'center',fontSize:'20px'}}>
            <strong>{author}</strong>
          </Card.Text>
         
        </Card.Body>
        <div className='justify-content-center d-flex mt-2'>
            <Button onClick={handleClick}  variant="primary">Generate Qoute</Button>
            </div>
      </Card>
       </div>
       
      </div>
    </>
  )
}

export default App
