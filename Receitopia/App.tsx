import { StatusBar } from 'expo-status-bar';
import { NotificacaoProvider } from "./src/contexts/Notificação";
import { Routes } from "./src/routes/routes"
import { Register } from './src/screens/Register';
import { SingIn } from './src/screens/SingIn';

export default function App() {
  return (
    <NotificacaoProvider>
      <Routes/>
    </NotificacaoProvider>
    
    
  );
}
