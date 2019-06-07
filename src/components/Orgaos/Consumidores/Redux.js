import { SagaController } from '../../providers/Redux/SagaController';
import { ServiceApiConectaGov } from '../../services/api/ConectaGov';
import { ReduxReducersUtils } from '../../providers/Redux/ReducersUtils';
import { ReduxSagaUtils } from '../../providers/Redux/SagaUtils';

// sagas
const getOrgaosConsumidoresController = new SagaController({
  saga: 'getOrgaosConsumidores',
  asyncTask: ServiceApiConectaGov.getOrgaosConsumidores
});
export const getOrgaosConsumidores = getOrgaosConsumidoresController.actionCreator;

// unified all reducer
export const getOrgaosConsumidoresReducer = ReduxReducersUtils.compose(
  getOrgaosConsumidoresController.reducer
);

// unified all sagas watcher
export const getOrgaosConsumidoresWatcher = ReduxSagaUtils.compose(
  getOrgaosConsumidoresController.watcher
);