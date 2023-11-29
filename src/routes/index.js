import { createNativeStackNavigator  } from '@react-navigation/native-stack';

import Welcome from '../pages/Welcome';
import LoginAlmox from '../pages/pagesAlmox/LoginAlmox';
import SignupAlmox from '../pages/pagesAlmox/SignupAlmox';
import PrincipalAlmox from '../pages/pagesAlmox/principalAlmox';
import Checklist from '../pages/pagesAlmox/Checklist';
import Relatorio from '../pages/pagesAlmox/Relatorio';
import RelatorioDetail from '../pages/pagesAlmox/ReltorioDetail';
import Estoque from '../pages/pagesAlmox/Estoque';
import ConfiguracaoAlmox from '../pages/pagesAlmox/ConfiguracaoAlmox';
import Select from '../pages/Select';
import LoginOper from '../pages/pagesOper/LoginOper';
import SignupOper from '../pages/pagesOper/SignupOper';
import PrincipalOper from '../pages/pagesOper/principalOper';
import ConfiguracaoOper from '../pages/pagesOper/ConfiguracaoOper';
import EditarContaAlmo from '../pages/pagesAlmox/EditarContaAlmo';
import AlterarEmailAlmox from '../pages/pagesAlmox/AlterarEmailAlmox';
import AlterarSenhaAlmox from '../pages/pagesAlmox/AlterarSenhaAlmox';
import EditarContaOper from '../pages/pagesOper/EditarContaOper';
import AlterarSenhaOper from '../pages/pagesOper/AlterarSenhaOper';
import AlterarEmailOper from '../pages/pagesOper/AlterarEmailOper';
import RelatorioOper from '../pages/pagesOper/RelatorioOper';
import RelatorioDetailOper from '../pages/pagesOper/RelatorioDetailOper'
import TermosDeUso from '../pages/TermosDeUso';



const Stack = createNativeStackNavigator();

export default function Routes(){
    
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="Select"
                component={Select}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="LoginAlmox"
                component={LoginAlmox}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="LoginOper"
                component={LoginOper}
                options={{headerShown: false}}
            />
            
            <Stack.Screen
                name="SignupAlmox"
                component={SignupAlmox}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="SignupOper"
                component={SignupOper}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="PrincipalAlmox"
                component={PrincipalAlmox}
                options={{headerShown: false}}
             />

            <Stack.Screen
                name="PrincipalOper"
                component={PrincipalOper}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="ConfiguracaoOper"
                component={ConfiguracaoOper}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="Checklist"
                component={Checklist}
                options={{headerShown: false}}
             />

            <Stack.Screen
                name="Relatorio"
                component={Relatorio}
                options={{headerShown: false}}
             />

            <Stack.Screen
                name="RelatorioDetail"
                component={RelatorioDetail}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="Estoque"
                component={Estoque}
                options={{headerShown: false}}
             />

            <Stack.Screen
                name="ConfiguracaoAlmox"
                component={ConfiguracaoAlmox}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="EditarContaAlmo"
                component={EditarContaAlmo}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="AlterarEmailAlmox"
                component={AlterarEmailAlmox}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="EditarContaOper"
                component={EditarContaOper}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="AlterarEmailOper"
                component={AlterarEmailOper}
                options={{headerShown: false}}
            />
            
            <Stack.Screen
                name="AlterarSenhaOper"
                component={AlterarSenhaOper}
                options={{headerShown: false}}
            />
            
            <Stack.Screen
                name="AlterarSenhaAlmox"
                component={AlterarSenhaAlmox}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="RelatorioOper"
                component={RelatorioOper}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="RelatorioDetailOper"
                component={RelatorioDetailOper}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="TermosDeUso"
                component={TermosDeUso}
                options={{headerShown: false}}
            />
            
        </Stack.Navigator>
    )
}