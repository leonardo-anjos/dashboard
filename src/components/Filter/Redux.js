import { SagaController } from '../../providers/Redux/SagaController';
// import { ServiceApiExemple } from '../../services/api/Exemple';
import { ReduxReducersUtils } from '../../providers/Redux/ReducersUtils';
import { ReduxSagaUtils } from '../../providers/Redux/SagaUtils';

// saga: getExemple

// const getExempleController = new SagaController({
//   saga: 'getExemple',
//   asyncTask: ServiceApiExemple.getExemple
// });

// export const getExemple = getExempleController.actionCreator;

// saga: getFaccao

// const getFaccaoController = new SagaController({
//   saga: 'getFaccao',
//   asyncTask: ServiceApiExemple.getFaccao
// });
// export const getFaccao = getFaccaoController.actionCreator;


// unified faccao reducer
// export const faccaoReducer = ReduxReducersUtils.compose(
//   getFaccaoController.reducer,  
// );

// unifided Exemple reducer 
// export const ExempleReducer = ReduxReducersUtils.compose(
//   getExempleController.reducer,
// );

// unified faccao sagas watchers
// export const faccaoWatchers = ReduxSagaUtils.compose(
//   getExempleController.watcher,
//   getFaccaoController.watcher,
// );