/**
 * Created by admin on 2020/4/20.
 */
import request from '@/utils/request'

// 场景列表
export function getSceneList() {
  return request({
    url: 'qcs/system/location/getScene',
    method: 'get'
  });
}
// 建筑列表
export function getBuildingList(params) {
  return request({
    url: 'qcs/system/location/getBuilding/'+params,
    method: 'get'
  });
}
