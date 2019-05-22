import { SagaController } from '../../providers/Redux/SagaController';
import { ServiceApiConectaGov } from '../../services/api/ConectaGov';
import { ReduxReducersUtils } from '../../providers/Redux/ReducersUtils';
import { ReduxSagaUtils } from '../../providers/Redux/SagaUtils';

// saga: getSperintendenciasFla
const getSuperintendenciasFlaController = new SagaController({
  saga: 'getSuperintendenciasFla',
  asyncTask: ServiceApiConectaGov.getSuperintendenciasFla
});
export const getSuperintendenciasFla = getSuperintendenciasFlaController.actionCreator;

// unified all reducer
export const superintendenciasFlaReducer = ReduxReducersUtils.compose(
  getSuperintendenciasFlaController.reducer,  
);

// unified all sagas watcher
export const superintendenciasFlaWatcher = ReduxSagaUtils.compose(
  getSuperintendenciasFlaController.watcher
);