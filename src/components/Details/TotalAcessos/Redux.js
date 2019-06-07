import { SagaController } from '../../../providers/Redux/SagaController';
import { ServiceApiConectaGov } from '../../../services/api/ConectaGov';
import { ReduxReducersUtils } from '../../../providers/Redux/ReducersUtils';
import { ReduxSagaUtils } from '../../../providers/Redux/SagaUtils';

// saga: total de acessos
const getTotalAcessosController = new SagaController({
  saga: 'getTotalAcessos',
  asyncTask: ServiceApiConectaGov.getTotalAcessos
});
export const getTotalAcessos = getTotalAcessosController.actionCreator;

// unified all reducer
export const totalAcessosReducer = ReduxReducersUtils.compose(
  getTotalAcessosController.reducer
);

// unified all sagas watcher
export const totalAcessosWatcher = ReduxSagaUtils.compose(
  getTotalAcessosController.watcher
);