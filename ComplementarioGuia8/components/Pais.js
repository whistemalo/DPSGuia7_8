import React, {useState, useEffect} from "react";
import { StyleSheet, View, Text,Image } from 'react-native';
import { Card } from 'react-native-elements';




const Pais = ({ resultado }) => {
const [info,setinfo]=useState([]);
const [nombre,setnombre]=useState();
const [capital,setcapital]=useState();
const [region,setregion]=useState();
const [lengua,setlengua]=useState([]);
const [metros,setMetros]=useState();
const [bandera,setBandera]=useState();
useEffect(() => {
    setinfo(resultado);
   lengua.length =0;
    Object.values(info).map(e => {
      console.log(info);
      setnombre(e.nome.abreviado);
      setcapital(e.governo.capital.nome);
      setregion(e.localizacao.regiao.nome);
      setMetros(e.area.total);
      Object.values(e.linguas).map(l=>{
        lengua.push(l.nome)
      })
      if(e.nome.abreviado == 'El Salvador'){
        setBandera('https://www.elsalvadormipais.com/wp-content/uploads/2017/01/bandera-de-el-salvador.jpg');
      }else if(e.nome.abreviado == 'Canadá'){
          setBandera('https://m.media-amazon.com/images/I/31VdK1fZDWL._AC_.jpg');
      }else if(e.nome.abreviado == 'Guatemala'){
          setBandera('https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala.svg');
      }else if(e.nome.abreviado == 'Honduras'){
          setBandera('https://upload.wikimedia.org/wikipedia/commons/8/82/Flag_of_Honduras.svg');
      }else if(e.nome.abreviado == 'Nicarágua'){
          setBandera('https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg');
      }else if(e.nome.abreviado == 'Panamá'){
          setBandera('https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg');
      }else if(e.nome.abreviado == 'Costa Rica'){
          setBandera('https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Costa_Rica.svg');
      }else if(e.nome.abreviado == 'México'){
          setBandera('https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg');
      }else if(e.nome.abreviado == 'Argentina'){
          setBandera('https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg');
      }else if(e.nome.abreviado == 'Estados Unidos da América'){
          setBandera('https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg');
      }else if(e.nome.abreviado == 'Colômbia'){
          setBandera('https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg');
      }else if(e.nome.abreviado == 'Espanha'){
          setBandera('https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg');
      }else if(e.nome.abreviado == 'Peru'){
          setBandera('https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg');
      }
    }
 );
 
  });

  return (
    <Card>
        <Card.Title>{nombre}</Card.Title>
        <Card.Divider />
        <View style={{ justifyContent: 'center' }}>
           <Text>Capital:{capital}</Text>
          <Text>Region:{region}</Text>
          <Text>Lengua:{lengua.toString()}</Text>
          <Text>km2: {metros}</Text>
          <Image style={styles.tinyLogo} source={{ uri: bandera}} />
        </View>
      </Card>
    
  );
};
  const styles = StyleSheet.create({
    tinyLogo: {
      resizeMode: 'stretch',
      height: 200,
      width: 200,
      marginLeft: 10
    },
  });
export default Pais;
