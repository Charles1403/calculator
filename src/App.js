import { Box, Flex, Input } from '@chakra-ui/react';
import {useState} from 'react'
import Data from './data';
import Keys from './components/Keys';


function App() {

  const [result, setResult] = useState('')

  return (
    <Box width='30%' mx='auto' my='7em' border='1px solid blue'>
     <Flex flexWrap='wrap' w='100%' justifyContent='center'>
       <Input size='lg' p={8} m={5} borderColor='blue' textAlign='right' value={result}/>
      {Data.map((i, index) => 
      <Keys key={index} name={i.name} width={i.width} text={i.text} setResult={setResult} result={result}/>
      )}
     </Flex>
    </Box>
  );
}

export default App;

