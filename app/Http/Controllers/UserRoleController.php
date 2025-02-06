<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class UserRoleController extends Controller
{

    public function index()
    {
        return response()->json(User::all());
    }

    /**
     * Display a listing of the resource.
    //  */
    // public function index()
    // {
    //     $users = User::all();
    //     return view('user_role.index', compact('users'));
    // }


    // public function userTable()
    // {
    //     $users = User::all();
    //     return view('user_role.userTable', compact('users'));
    // }
    //     /**
    //  * Show the form for creating a new resource.
    //  */
    // public function create()
    // {
    //     $users = User::all();
    //     return view('user_role.create', compact('users'));
    // }

    /**
     * Store a newly created resource in storage.
     */
    public function store()
    {
        try {
            $validated = request()->validate([
                'username' => ['required'],
                'email' => ['required'],
                'password' => ['required'],
                'firstname' => ['required' ],
                'middlename' => ['required'],
                'lastname' => ['required'],
                'name_ext' => ['nullable'],
                'gender' => ['required'],
                'status' => ['required'],

            ]);

            $user = User::create([
                'username' => $validated['username'],
                'email' => $validated['email'],
                'password' => $validated['password'],
                'firstname' => $validated['firstname'],
                'middlename' => $validated['middlename'],
                'lastname' => $validated['lastname'],
                'name_ext' => $validated['name_ext'],
                'gender' => $validated['gender'],
                'status' => $validated['status'],

            ]);

            return response()->json([
                'message' => 'user created successfully!',
                'user' => $user
            ], 201);

        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Validation Error',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Server Error: ' . $e->getMessage()
            ], 500);
        }
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return response()->json([
            'user' => $user,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        // $user = User::findOrFail($id);
        // return view('user_role.edit', compact('user'));
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(User $user)
    {
        try {
            // Validate and get validated data
            $validated = request()->validate([
                'username' => ['required'],
                'email' => ['required'],
                'firstname' => ['required'],
                'middlename' => ['required'],
                'lastname' => ['required'],
                'name_ext' => ['nullable'],
                'gender' => ['required'],
                'status' => ['required']
            ]);

            // Update using validated data
            $user->update($validated);

            return response()->json([
                'message' => 'User updated successfully!',
                'user' => $user->fresh()  // Return refreshed model
            ], 200);

        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Validation Error',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Server Error: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return void
     */


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();
        return response()->noContent();
    }
}



