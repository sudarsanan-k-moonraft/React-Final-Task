import { DrugModel } from '../../modals/drugModel';

export const mapDrugs=(drugs:any[]):DrugModel[] => {
  const allDrugs=[] as DrugModel[];

  if(!drugs.length){
    return allDrugs;
  }

  return drugs.map((drugItem,i) => {
    return{
        drugId:i,
        name:drugItem.name,
    } as DrugModel;
  });
   
}