import { SagaController } from '../../providers/Redux/SagaController';
import { ServiceApiConectaGov } from '../../services/api/ConectaGov';
import { ReduxReducersUtils } from '../../providers/Redux/ReducersUtils';
import { ReduxSagaUtils } from '../../providers/Redux/SagaUtils';

// grafico 1 - soma
const getSomaTotalBensEmUsoController = new SagaController({
  saga: 'getSomaTotalBensEmUso',
  asyncTask: ServiceApiConectaGov.getSomaTotalBensEmUso
});
export const getSomaTotalBensEmUso = getSomaTotalBensEmUsoController.actionCreator;

// grafico 1 - media
const getMediaBensEmUsoController = new SagaController({
  saga: 'getMediaBensEmUso',
  asyncTask: ServiceApiConectaGov.getMediaBensEmUso
});
export const getMediaBensEmUso = getMediaBensEmUsoController.actionCreator;

// unified all reducer
export const graficosBarraReducer = ReduxReducersUtils.compose(
  getSomaTotalBensEmUsoController.reducer,  
  getMediaBensEmUsoController.reducer
);

// unified all sagas watcher
export const graficosBarraWatcher = ReduxSagaUtils.compose(
  getSomaTotalBensEmUsoController.watcher,
  getMediaBensEmUsoController.watcher
);