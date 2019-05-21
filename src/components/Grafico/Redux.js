import { SagaController } from '../../providers/Redux/SagaController';
// import { ServiceApiExemple } from '../../services/api/Exemple';
import { ServiceApiConectaGov } from '../../services/api/ConectaGov';
import { ReduxReducersUtils } from '../../providers/Redux/ReducersUtils';
import { ReduxSagaUtils } from '../../providers/Redux/SagaUtils';

// saga: getExemple

// const getExempleController = new SagaController({
//   saga: 'getExemple',
//   asyncTask: ServiceApiExemple.getExemple
// });

// export const getExemple = getExempleController.actionCreator;

// saga: getAll
const getAllController = new SagaController({
  saga: 'getAll',
  asyncTask: ServiceApiConectaGov.getAll
});
export const getAll = getAllController.actionCreator;

// unifided Exemple reducer 
// export const ExempleReducer = ReduxReducersUtils.compose(
//   getExempleController.reducer,
// );

// unified all reducer
export const getAllReducer = ReduxReducersUtils.compose(
  getAllController.reducer,  
);

// unified exemples sagas watchers
// export const exempleWatchers = ReduxSagaUtils.compose(
//   getExempleController.watcher
// );

// unified all sagas watcher
export const getAllWatcher = ReduxSagaUtils.compose(
  getAllController.watcher
);