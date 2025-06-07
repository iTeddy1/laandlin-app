import { yupResolver } from '@hookform/resolvers/yup'
import { City, Country, ICity, ICountry, IState, State } from 'country-state-city'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { SubmitModalBtn } from '../common/Buttons'
import Combobox from '../common/Combobox'
import DisplayError from '../common/DisplayError'
import HandleResponse from '../common/HandleResponse'
import Modal from '../common/Modal'
import TextField from '../common/TextField'

import { useUserInfo } from '@/hooks'
import { useEditUserMutation } from '@/services'
import { addressSchema } from '@/utils'

const AddressModal = props => {
  //? Props
  const { isShow, onClose, address } = props

  //? Assets
  const AllCountries = Country.getAllCountries().map(country => ({
    name: country.name,
    code: country.isoCode,
  }))

  const insets = useSafeAreaInsets()

  //? Get User Data
  const { userInfo } = useUserInfo()

  //? State
  const [cities, setCities] = useState([])
  const [states, setStates] = useState([])

  //? Form Hook
  const {
    handleSubmit,
    control,
    formState: { errors: formErrors },
    setValue,
    getValues,
    watch,
  } = useForm({
    resolver: yupResolver(addressSchema),
    defaultValues: address,
  })

  //? Edit User-Info Query
  const [editUser, { data, isSuccess, isLoading, isError, error }] = useEditUserMutation()

  //? Re-Renders
  //* Change cities beside on province

  useEffect(() => {
    setValue('states', {})
    if (getValues('country'))
      setStates(
        State.getStatesOfCountry(getValues('country')?.code).map(state => ({
          name: state.name,
          code: state.isoCode,
        }))
      )
    watch('country')
  }, [getValues('country')?.code])

  useEffect(() => {
    setValue('city', {})
    setCities(
      City.getCitiesOfState(getValues('country')?.code, getValues('state')?.code).map(city => ({
        name: city.name,
        code: city.name,
      }))
    )
    watch('state')
  }, [getValues('state')?.code])

  useEffect(() => {
    if (userInfo?.address) {
      setValue('city', userInfo.address.city)
      setValue('state', userInfo.address.state)
    }
  }, [])

  //? Handlers
  const submitHandler = address => {
    const addressData = {
      country: address.country.name,
      state: address.state.name,
      city: address.city.name,
      county: address.county,
      address: address.address,
      postalCode: address.postalCode,
    }

    editUser({
      body: { address: addressData },
    })
  }
  // console.log(error)
  //? Render(s)
  return (
    <>
      {/* Handle Edit Address Response */}
      {(isSuccess || isError) && (
        <HandleResponse
          isError={isError}
          isSuccess={isSuccess}
          error={error?.data?.message}
          message={data?.message}
          onSuccess={onClose}
        />
      )}

      <Modal isShow={isShow} onClose={onClose} effect="bottom-to-top" className="m-0">
        <Modal.Content
          onClose={onClose}
          style={{ paddingTop: insets.top }}
          className="flex flex-col w-[100vw] h-[100vh] m-0 px-5 py-3 bg-white"
        >
          <Modal.Header onClose={onClose}>Address Management</Modal.Header>
          <Modal.Body>
            <Text>Please enter your delivery address</Text>
            <View className="flex flex-col justify-between flex-1 mt-4 overflow-y-auto">
              <View className="space-y-2">
                <View className="space-y-2">
                  <Combobox
                    control={control}
                    name="country"
                    list={AllCountries}
                    placeholder="Please select your country"
                  />
                  <DisplayError errors={formErrors.country?.name} />
                </View>

                <View className="space-y-2 ">
                  <Combobox
                    control={control}
                    name="state"
                    list={states}
                    placeholder="Please select your state"
                  />
                  <DisplayError errors={formErrors.state?.name} />
                </View>

                <View className="space-y-2 ">
                  <Combobox
                    control={control}
                    name="city"
                    list={cities}
                    placeholder="Please select your city"
                  />
                  <DisplayError errors={formErrors.city?.name} />
                </View>

                <TextField
                  label="County"
                  control={control}
                  errors={formErrors.county}
                  name="county"
                />

                <TextField
                  label="Street Information"
                  control={control}
                  errors={formErrors.address}
                  name="address"
                />

                <TextField
                  label="postal code"
                  control={control}
                  errors={formErrors.postalCode}
                  name="postalCode"
                  type="number"
                  direction="ltr"
                  inputMode="numeric"
                />
              </View>

              <View className="py-3 border-t-2 border-gray-200 lg:pb-0 flex">
                <SubmitModalBtn
                  isLoading={isLoading}
                  className="ml-auto"
                  onPress={handleSubmit(submitHandler)}
                >
                  Sure
                </SubmitModalBtn>
              </View>
            </View>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  )
}

export default AddressModal
