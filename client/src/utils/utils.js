/**
 * Created by Ergardt.Vladimir on 28.01.2019.
 */

/**
 * Создание объекта параметров (добавление материала)
 * */
export function createParams(amount) {
  return {
    name: amount.find(x => x.key === 'name').value,
    start_size_grain: amount.find(x => x.key === 'start_size_grain').value,
    layer_thickness: amount.find(x => x.key === 'layer_thickness').value,
    start_porosity: amount.find(x => x.key === 'start_porosity').value,
    surface_energy: amount.find(x => x.key === 'surface_energy').value,
    density: amount.find(x => x.key === 'density').value,
    viscosity: amount.find(x => x.key === 'viscosity').value,
    weight: amount.find(x => x.key === 'weight').value,
    pf_s_diff: amount.find(x => x.key === 'pf_s_diff').value,
    ea_s_diff: amount.find(x => x.key === 'ea_s_diff').value,
    pf_c_diff: amount.find(x => x.key === 'pf_c_diff').value,
    ea_c_diff: amount.find(x => x.key === 'ea_c_diff').value
  };
}

/**
 * Создание объекта параметров (обновление материала)
 * */
export function createParamsUpdate(amount) {
  const params = createParams(amount.form);
  params.id = amount.id;
  return params;
}

/**
 * Заполнить параметры текщего материала
 * */
export function createMaterialParams(params, material) {
  params.find(x => x.key === 'name').value = material.name;
  params.find(x => x.key === 'start_size_grain').value = material.start_size_grain;
  params.find(x => x.key === 'layer_thickness').value = material.layer_thickness;
  params.find(x => x.key === 'start_porosity').value = material.start_porosity;
  params.find(x => x.key === 'surface_energy').value = material.surface_energy;
  params.find(x => x.key === 'density').value = material.density;
  params.find(x => x.key === 'viscosity').value = material.viscosity;
  params.find(x => x.key === 'weight').value = material.weight;
  params.find(x => x.key === 'pf_s_diff').value = material.pf_s_diff;
  params.find(x => x.key === 'ea_s_diff').value = material.ea_s_diff;
  params.find(x => x.key === 'pf_c_diff').value = material.pf_c_diff;
  params.find(x => x.key === 'ea_c_diff').value = material.ea_c_diff;
}
