import { SagaController } from '../../providers/Redux/SagaController';
import { ServiceApiConectaGov } from '../../services/api/ConectaGov';
import { ReduxReducersUtils } from '../../providers/Redux/ReducersUtils';
import { ReduxSagaUtils } from '../../providers/Redux/SagaUtils';

// sagas
const getOrgaosFornecedoresController = new SagaController({
  saga: 'getOrgaosFornecedores',
  asyncTask: ServiceApiConectaGov.getOrgaosFornecedores
});
export const getOrgaosFornecedores = getOrgaosFornecedoresController.actionCreator;

// unified all reducer
export const getOrgaosFornecedoresReducer = ReduxReducersUtils.compose(
  getOrgaosFornecedoresController.reducer
);

// unified all sagas watcher
export const getOrgaosFornecedoresWatcher = ReduxSagaUtils.compose(
  getOrgaosFornecedoresController.watcher
);