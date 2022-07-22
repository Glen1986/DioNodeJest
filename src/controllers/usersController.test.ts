import {Request, Response} from 'express';
import {makeMockResponse} from '../mocks/mocksResponse';
import {UsersController} from "./usersController";

describe('Users Controller', () => {
  const usersController = new UsersController();

  const mockRequest = {} as Request
  const mockResponse = makeMockResponse() 
  it('need to list users', () => {
    usersController. listarUsuario(mockRequest , mockResponse)
    expect(mockResponse.state.status).toBe(200)
    expect(mockResponse.state.json).toHaveLength(2)
  })
  it('need to create a new user', () => {

    mockRequest.body = {
      name: 'new user'
    }

    usersController.crearUsuario(mockRequest, mockResponse)
    expect(mockResponse.state.status).toBe(201)
    expect(mockResponse.state.json).toMatchObject({'mensagem': `Usuário new user criado`})
  })
  
})
